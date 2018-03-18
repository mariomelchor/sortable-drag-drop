const row = document.querySelector('.row');
var dragElement;

row.addEventListener('dragstart', function(e) {

  let target = event.target;

  if ( target && target.nodeName === 'DIV' ) {

    dragElement = target;
    dragElement.classList.add('dragging')

    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text', dragElement.target);

  }

  // console.log('dragstart', e);
})

//dragend
// row.addEventListener('dragend', function(e) {
//   // console.log(e)

//   this.classList.remove('dragging')
// })

//dragover
row.addEventListener('dragover', function(e) {
  e.preventDefault();
  e.dataTransfer.dropEffect = 'move';
  
  var target = e.target;
  // console.log('dragover', target)

  if( target && target !== dragElement && target.nodeName === 'DIV' ){
      // Сортируем
      row.insertBefore(dragElement, target.nextSibling || target);
  }
})