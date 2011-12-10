jquery.easytmpl.js (jquery Easy Template)
====================

version 0.0.0

--------------------

What is jquery.easytmpl.js
====================
I recommend it developers who feel backbone.js too heavey.

It's easy.

-----
```html
		<script type="text/javascript" charset="utf8" src="../lib/jquery-1.7.min.js"></script>
		<script type="text/javascript" charset="utf8" src="../lib/easytmpl.js"></script>
		<script type="text/javascript" charset="utf8">
      $(function(){
        var Todo = $.ezUnit('todo', {'h2.title': 'no title', 'p.desc': 'default value'}, {'h2.title': {click: function(){console.log(this);}}});

        // most simple
        // new Todo()
        var aTodo = new Todo();
				
        // set value
        // Unit.set(/* string */ PATH, /* string */ VALUE[, /* boolean */ isHTML])
        aTodo.set('h2.title', 'hogehoge');
        aTodo.set('p.desc', '<h3>hogehoge</h3>', true);
        $('body').append(aTodo.view());

        // initialize
        // new Todo(/* object<PATH, VALUE> */ settings, /* object<PATH, object<EVENT, HANDLER>> */ events)
        var bTodo = new Todo({'p.desc': 'it is default value'}, {'h2.title': {'click': function(){alert(this)}}});
        // event setting
        // new Todo( /* string */ PATH, /* function */ CALLBACK)
        bTodo.on('p.desc', 'click', function(){console.log(this)});
        $('body').append(bTodo.view());

        // ajax load
        // new Todo( /* string */ PATH, /* function */ CALLBACK)
        var cTodo = new Todo('/todo.js', function(res){
          this.set('h2.title', res.result.name);
          $('body').append(this.view());
        });
		</script>
		<script type="text/tmplate" id="tmpl-todo">
			<div class="todo">
				<h2 class="title"></h2>
				<p class="desc"></p>
			</div>
		</script>
```

--------------------

API
====================
* create Generator
  var Gen = $.ezUnit(/* string */ name)
  var Gen = $.ezUnit(/* string */ name, /* object */ global settings)
  var Gen = $.ezUnit(/* string */ name, /* object */ global settings, /* object */ global events)
* create Unit
  new Gen()
	new Gen(/* object */ settings)
	new Gen(/* object */ settings, /* object */ events)
  new Gen(/* string */ ajax url, /* function */ callback)	