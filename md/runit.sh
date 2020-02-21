# 

. ~/sandbox/HLR/brings/envrc.sh
qm=$(ipms add -w -Q _data/*.json)
echo qm: $qm
file="$1"
bname="${1%.*}"
pandoc -t html -f markdown "$file" --template=_layouts/default \
 -V qmjson=$qm -o "${bname}.htm"

qm=$(ipms add -w -Q "${bname}.htm") 
echo "http://127.0.0.1:8080/ipfs/$qm/${bname}.htm"

