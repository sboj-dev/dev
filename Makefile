deploy:
	rm -rf *.json
	rm -rf *.js
	rm -rf *.html
	rm -rf static
	rm -rf icons
	rm -rf robots.txt
	cp ../frontend/build/* . -r
	git add .
	git commit -m "Deploy"
	git push origin master
