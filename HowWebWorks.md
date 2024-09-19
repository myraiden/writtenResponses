# **How Web Works Exercise**

## **Part One: Solidify Terminology**

In your own terms, define the following terms:

- What is HTTP?
  - HTTP is "Hypertext Transfer Protocol". This is the name for a set of rules that the communication format should follow. It allows for a structure in the request/response communication between browsers and servers.
- What is a URL?
  - URL is "Uniform Resource Locator". It is a unique identifier that is known by all resources on the internet. This is the 'address' of a site.
- What is DNS?
  - DNS is "Domain Name Service". This turns a human-readable hostname into an IP address which the server talks to.
- What is a query string?
  - A query string provides additional informatino to a server request. This information can include a preferred language, search terms, and form information.
- What are two HTTP verbs and how are they different?
  - Two HTTP verbs are GET and POST. GET makes a request to a server containing the URL the user wants. GET cannot change server data. POST makes a request to a server but will change the data stores on the server.
- What is an HTTP request?
  - An HTTP request is when a browser sends a request to a server. This usually involves a GET request in the HTTProtocol. This includes the URL and any headers which specify the details of the GET request.
- What is an HTTP response?
  - An HTTP response is data sent from the server to the browser in HTTProtocol. This includes a status code, and returned headers for additional details.
- What is an HTTP header? Give a couple examples of request and response headers you have seen.
  - An HTTP header is where additional data is provided either to the server, or back to the browser, to customize the request and response communications.
  - Request header example: https://www.google.com/search?q=define+url
    - This url says the user has asked the site GOOGLE.COM to search for the words "define url"
  - Response header example: https://www.google.com/search?q=define+url&rlz=1C1CHBF_enUS818US818&oq=define+url&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBCDEyMTVqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8
    - This response header shows the search sent by the user, and includes the browser type, among other idenfiers.
- What are the processes that happen when you type “http://somesite.com/some/page.html” into a browser?
  -The processes which happen when typing in a specific url to a browser includes:
    1. Request
       - A GET request is sent to a server. This request includes the URL, and the header has additional information such as search terms, language, browser type, cookies, etc.
    2. Server
       - The server looks up the DNS, translating it to a unique IP address and requesting information from that specific website (often hosted on another server).
       - The host site sends back data which the server then sends back to the browser
    3. Response
       - The server sends the data back to the browser, containing the content, information about the date/time, it sets cookies and any additional values in the browser the site may need to function.

## **Part Two: Practice Tools**

1. Using ***curl***, make a ***GET*** request to the *icanhazdadjoke.com* API to find all jokes involving the word “pirate”
   - curl 'https://icanhazdadjoke.com'
    - result: I am so good at sleeping I can do it with my eyes closed!
2. Use ***dig*** to find what the IP address is for *icanhazdadjoke.com*
   - 172.18.176.1#53(172.18.176.1)
3. Make a simple web page and serve it using ***python3 -m http.server***. Visit the page in a browser.
   - http://localhost:8000/moviesApp.html
     - viewed moviesApp.html from prior class exercise

## **Part Three: Explore Dev Tools**

Build a very simple HTML form that uses the GET method (it can use the same page URL for the action) when the form is submitted.

Add a field or two to the form and, after submitting it, explore in Chrome Developer tools how you can view the request and response headers.

Edit the page to change the form type to POST, refresh in the browser and re-submit. Do you still see the field in the query string? Explore in Chrome how you can view the request and response headers, as well as the form data.

## **Part Four: Explore the URL API**

At times, it’s useful for your JavaScript to look at the URL of the browser window and change how the script works depending on parts of that (particularly the query string).

[Read about the URL API](https://developer.mozilla.org/en-US/docs/Web/API/URL)

Try some of the code examples in the Chrome Console so that you can get comfortable with the basic methods and properties for instances of the URL class.
