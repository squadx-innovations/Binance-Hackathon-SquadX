const currentUrl = new URL(window.location.href);

const forwarderOrigin =
  currentUrl.hostname === 'localhost' ? 'https://localhost:3000/' : undefined;

const isMetaMaskInstalled = () => {
  const { ethereum } = window;
  return Boolean(ethereum && ethereum.isMetaMask);
};

const onboardButton = document.getElementById('connectButton');

const accountId = $('#accountId').val();

function requestAccount() {
  return ethereum.request({
    method: 'eth_requestAccounts',
  });
}

async function connectToMetaMask() {
  try {
    const newAccounts = await requestAccount();
    // handleNewAccounts(newAccounts);
    if (newAccounts) {
      authLogin(newAccounts[0]);
    }
  } catch (error) {
    console.error(error);
  }
}

function authLogin(newAccounts) {
  $.get(`/auth/${newAccounts}`, (res) => {
    challenge = res.challenge;
    if (!res.user) {
      onboardButton.innerText = 'Please Click Sign';
      const from = newAccounts;
      const params = [challenge, from];
      const method = 'eth_signTypedData';
      web3.currentProvider.sendAsync(
        {
          method,
          params,
          from,
        },
        async (err, result) => {
          signature = result.result;
          if (err) {
            onboardButton.innerText = 'Connect';
            return console.error(err);
          }
          if (result.error) {
            onboardButton.innerText = 'Connect';
            return console.error(result.error);
          }
          // $('.signature').text(signature);
          $.get(
            `/auth/${challenge[1].value}/${signature}/${newAccounts}`,
            (res) => {
              if (res === newAccounts) {
                updateSession(newAccounts);
              } else {
                onboardButton.innerText = 'Connect';
                console.error('not auth');
              }
            }
          );
        }
      );
    } else {
      updateSession(newAccounts);
    }
  });
}

function updateSession(newAccounts) {
  if (newAccounts) {
    $.post('/account-update', { accountId: newAccounts }, (result) => {
      if (result.statusMessage == 'success') {
        window.location.reload();
      }
      return false;
    });
  }
}

function onClickInstall() {
  let onboarding;
  try {
    onboarding = new MetaMaskOnboarding({ forwarderOrigin });
  } catch (error) {
    console.error(error);
  }
  onboardButton.innerText = 'Onboarding In Progress';
  onboardButton.disabled = true;
  onboarding.startOnboarding();
}

function destroySession() {
  $.get('/logout', (result) => {
    window.location.replace('/');
  });
}

function redirectToDashboard() {
  window.location.replace('/dashboard');
}

const eventListener = async () => {
  const { ethereum } = window;
  window.web3 = new Web3(ethereum);
  let onboarding;
  try {
    onboarding = new MetaMaskOnboarding({ forwarderOrigin });
  } catch (error) {
    console.error(error);
  }

  if (!isMetaMaskInstalled()) {
    // onboardButton.className.replace(/(?:^|\s)connectButton1(?!\S)/g, '');
    onboardButton.innerText = 'Click To Install MetaMask';
    onboardButton.onclick = onClickInstall;

    onboardButton.className = 'connectButton1';
    //onboardButton. = 'connectButton1';
    onboardButton.disabled = false;
  }

  const interval = setInterval(() => {
    /// // check account change
    web3.eth.getAccounts((err, accounts) => {
      if (accounts.length == 0) {
        $.get('/auth-check', (result) => {
          if (result.message == 'Success') {
            destroySession();
          }
        });
      } else if (accountId != '' && accounts[0] != accountId) {
        clearInterval(interval);
        $.get(`/auth/${accounts[0]}`, (res) => {
          if (!res.user) {
            swal({
              title: '',
              text: 'Please Re-connect with MetaMask again !! ',
            });
            setTimeout(() => {
              destroySession();
            }, 3000);
          } else {
            updateSession(accounts[0]);
          }
        });
      }

    });
  }, 1000);
};

window.addEventListener('DOMContentLoaded', eventListener);
