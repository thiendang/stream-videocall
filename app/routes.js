module.exports = function(app, streams) {

  // GET home 
  var index = function(req, res) {
    res.render('index', { 
                          title: 'Gọi Video', 
                          header: 'Gọi Video sử dụng công nghệ WebRTC',
                          username: 'Tên của bạn',
                          share: 'Chia sẻ link cho bạn bè',
                          footer: 'Ứng dụng chia sẻ video thông qua webcam',
                          id: req.params.id
                        });
  };

  // GET streams as JSON
  var displayStreams = function(req, res) {
    var streamList = streams.getStreams();
    // JSON exploit to clone streamList.public
    var data = (JSON.parse(JSON.stringify(streamList))); 

    res.status(200).json(data);
  };

  app.get('/streams.json', displayStreams);
  app.get('/', index);
  app.get('/:id', index);
}