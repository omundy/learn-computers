#!/bin/bash

echo 💩💩💩💩💩💩💩💩💩💩💩💩💩💩 build_pandoc 💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩

# note: this file needs to be executable: chmod +x build_slides.sh


######################################
############### PANDOC ###############
######################################

## TEST
# pandoc -s README.md -o test.html --template=assets/pandoc/easy-pandoc-templates/html/bootstrap_menu.html

# ALL
# for i in topics/*.md;
# do
#     echo "$i" && pandoc -s $i -o ../www2/${i%.*}.html --template=assets/pandoc/easy-pandoc-templates/html/bootstrap_menu.html ;
# done
