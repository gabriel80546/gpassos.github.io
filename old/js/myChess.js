function onLoad() {
  var config = {
      draggable: true,
      dropOffBoard: 'snapback', // this is the default
      position: 'start'
    }

  var board1 = Chessboard(document.querySelector("#board1"), config);
  // var board1 = Chessboard(document.querySelector("#board1"), 'start');
  // var board1 = Chessboard("#board1", 'start');
}