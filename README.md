[FrontEnd](https://github.com/Ledslash/hacker-news-feed)
[Backend](https://github.com/Ledslash/hacker-news-api)

# To Start
First install the necessary packages
```
npm install
```
and then to start
```
npm run start
```

**Nota:** When starting the backend please change the url accordingly to the backend location in the file
```
/src/Header.tsx
```
It is hardcoded in there, you would only need to change the variable named **url**


**Note:** if you're using the same localhost sometimes (depending on the web browser) they don't allow you to call Same Network calls due to CORS protection, in order to eliminate this concern follow this [guide](https://www.thepolyglotdeveloper.com/2014/08/bypass-cors-errors-testing-apis-locally/) or use the next [google chrome plugin](https://chrome.google.com/webstore/detail/moesif-orign-cors-changer/digfbfaphojjndkpccljibejjbppifbc) for the most simple solution.
Remember to disable the plugin after you're done testing.

