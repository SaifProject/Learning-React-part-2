export default function Post({post}) {
  console.log(post);

  const {title , body} = post;
    return (
        <div className="post-card">
            <h3>{title}</h3>
            <p>{body}</p>
        </div>
    );
}