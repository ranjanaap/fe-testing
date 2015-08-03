Make sure to set your path if you dont install phantomjs gloabally

```
PATH="/path/to/node_modules/phantomjs/bin:$PATH" java -jar selenium-server-standalone-2.47.1.jar
```

OR just install phantom.js globally

```
sudo npm install -g phantomjs
```
before running any tests, you have to run Selenium Server:

```
java -jar selenium-server-standalone-2.47.1.jar
```
Run the test:

```
node_modules/mocha/bin/mocha test.js -t 10000
```
