import dataMock from './data-mock.json';

export default (req, res) => {

  const {page = 1} = req.query;
  const {posts} = dataMock;
  
  const limit = 8;
  const offset = (page - 1) * limit;

  let data = {
    ...dataMock,
    posts: posts.slice(offset, page * limit),
    pages: Math.ceil(posts.length / limit),
    page: +page
  };

  res.statusCode = 200;
  res.json(data);
}