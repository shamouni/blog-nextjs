import dataMock from "./data-mock.json";

export default (req, res) => {
  const { id } = req.query;
  const { posts, trends } = dataMock;
  const post = posts.find((i) => i.id == id);

  if (post) {
    post.summary = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, 
      temporibus soluta reiciendis itaque voluptate amet alias quidem sed molestiae 
      dignissimos voluptas deleniti hic ipsa, illo, rerum ullam. Natus, assumenda nobis.`;

    post.body = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed nesciunt voluptatem rem amet nam corporis in! Voluptatem sint odit, quaerat sunt libero iure, quae aut consectetur in beatae, ex alias! 
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat recusandae, neque dolorum doloremque fugiat deleniti exercitationem! Tempora minima similique dicta quidem provident ipsum impedit porro soluta consequuntur. Itaque, officiis! Perspiciatis. 
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque dolore ut ipsum excepturi tempora maiores incidunt iste, facere perspiciatis officia id minima totam inventore quam molestias, porro fugit numquam consectetur! `;
  }

  res.statusCode = 200;
  res.json({ post, related: trends });
};
