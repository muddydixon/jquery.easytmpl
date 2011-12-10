$(function(){
  var Todo = $.ezUnit('todo', {'h2.title': 'no title', 'p.desc': 'default value'}, {'h2.title': {click: function(){console.log(this);}}});
  var aTodo = new Todo();
  aTodo.set('h2.title', 'hogehoge');
  aTodo.set('p.desc', $('<h3>hogehoge</h3>'));
  $('body').append(aTodo.view());

  var bTodo = new Todo({'p.desc': 'it is default value'}, {'h2.title': {'click': function(){alert(this)}}});
  bTodo.on('p.desc', 'click', function(){console.log(this)});
  $('body').append(bTodo.view());

  var cTodo = new Todo('/todo.js', function(res){
    this.set('h2.title', res.result.name);
    $('body').append(this.view());
  });
  
});