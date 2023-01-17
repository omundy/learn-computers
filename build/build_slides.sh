#!/bin/bash

echo 💩💩💩💩💩💩💩💩💩💩💩💩💩💩 build_slides 💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩

# note: this file needs to be executable: chmod +x build_slides.sh


######################################
################ MARP ################
######################################

# ORIGINAL
# for FN in topics/*.md;
# do
# 	BFN=${FN%.md};
# 	# echo "marp ${FN} -o test/${BFN#*/}.html;"
# 	marp $FN -o slides/${BFN#*/}.html;
# done


# required when running directly in CLI
# BASEPATH=../


for FILEPATH in ${BASEPATH}topics/*.md;
do
	FILE=$(basename ${FILEPATH})
	TOPIC=${FILE%.md};
	#echo "FILEPATH='${FILEPATH}', FILENAME='${FILE}', TOPIC='${TOPIC}'"

	### DELETE ###
	# rm ${BASEPATH}topics/${TOPIC}/slides.html;

	### MARP ###
	# echo "marp ${FILEPATH} -o ${BASEPATH}slides/${TOPIC}.html;"
	marp ${FILEPATH} -o ${BASEPATH}slides/${TOPIC}.html;
done
