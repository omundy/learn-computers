#!/bin/bash

echo 💩💩💩💩💩💩💩💩💩💩💩💩💩💩 build_slides 💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩

# note: this file needs to be executable: chmod +x build_slides.sh


######################################
################ MARP ################
######################################

for FN in topics/*.md;
do
	BFN=${FN%.md};
	# echo "marp ${FN} -o test/${BFN#*/}.html;"
	marp $FN -o slides/${BFN#*/}.html;
done



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
