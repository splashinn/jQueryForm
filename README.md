# jQuery Form Plugin

## Description

Simple jQuery plugin for a form. I wrote this to better understand plugins

### Creating A New Form
```JavaScript
var exampleForm = new Form({
	url: mailUrl,
    fields: 'form input, form textarea',
    status: '#status',
    submit: '#submit'
})

exampleForm.init()
```

Pass in..

* The url to send the form data too
* The form fields all encapsulated in one string seperated by commas in the correct order of validation rules.
* Selector string where you want the status message to go
* The submit selector. This element will actually submit the form 

## Copyright

Copyright (c) 2014 Kyle Maune.
