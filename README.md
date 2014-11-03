# jQuery Form

### Create New Form
```JavaScript
var exampleForm = new Form({
	url: mailUrl,
    fields: 'form input, form textarea',
    status: '#status',
    submit: '#submit'
})

exampleForm.init()
```

Pretty simple, just pass in..

* The url to send the form data too
* The form fields all encapsulated in one string seperated by commas in the correct order of validation rules.
* Selector string where you want the status message to go
* The submit selector. This element will actually submit the form 
