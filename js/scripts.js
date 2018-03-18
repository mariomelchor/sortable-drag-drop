const row = document.querySelector('.row');
var dragElement;

//dragstart
row.addEventListener('dragstart', function(e) {
  var target = e.target;

  // Set Current dragElement
  if ( target && target.classList.contains('drag-item')  ) {

    dragElement = target;
    dragElement.classList.add('dragging')

    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text', dragElement.target);

  }
})

//dragend
row.addEventListener('dragend', function(e) {
  e.preventDefault();
  dragElement.classList.remove('dragging')
})

//dragover
row.addEventListener('dragover', function(e) {
  e.preventDefault();
  e.dataTransfer.dropEffect = 'move';
  
  var target = e.target;

  if( target && target !== dragElement && target.classList.contains('drag-item') ){
    row.insertBefore(dragElement, target.nextSibling || target);
  }
})