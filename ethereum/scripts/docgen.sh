surya mdreport docs/mdreport.md contracts/*.sol
surya graph contracts/**/*.sol | dot -Tpng > docs/Map.png
