ng build --prod --output-path ../tup-pay-deploy/public/

cd ../tup-pay-deploy

git add .
git commit -am "deploy para producao sistema em angular"
git push
