import { useEffect, useState } from "react";
import { epicPostsAction } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { Col, Row } from "react-bootstrap";
import { GlobeAmericas } from "react-bootstrap-icons";

function NewsPost() {
  const dispatch = useDispatch();
  const [showComments, setShowComments] = useState(false);
  useEffect(() => {
    dispatch(epicPostsAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const arrPosts = useSelector((state) => state.posts.posts);

  return (
    <>
      {arrPosts &&
        arrPosts.map((post, index) => {
          return (
            <div className="postCard my-4" key={index}>
              <div className="postCard-header">
                <Row className="">
                  <Col xs={2}>
                    <img
                      src={post.user.image}
                      alt="img profile"
                      className="logo"
                    />
                  </Col>

                  <Col xs={8} className="postProfile-info ">
                    <div>
                      <a className="m-0 fs-6 d-block text-dark fw-bold link-underline link-underline-opacity-0 link-underline-opacity-75-hover">
                        {post.user.name} {post.user.surname}
                      </a>
                      <p className="postMarginRight">
                        {post.user.title}{" "}
                        <span className="ps-3">
                          2s •
                          <GlobeAmericas className="fs-5 ms-3" />
                        </span>
                      </p>
                    </div>
                  </Col>
                  <Col xs={2}>
                    <div>
                      <a href="#" className="postFollow postMarginRight">
                        Collegati
                      </a>
                    </div>
                  </Col>
                </Row>
              </div>
              <div className="postCard-content">
                <h4>{post.text}</h4>
                {post.image && (
                  <img src={post.image} width={200} alt="image post" />
                )}

                <div className="postCard-info">
                  <span>
                    <a href="#" id="postLike">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="bi bi-hand-thumbs-up"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2 2 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a10 10 0 0 0-.443.05 9.4 9.4 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a9 9 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.2 2.2 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.9.9 0 0 1-.121.416c-.165.288-.503.56-1.066.56z" />
                      </svg>
                    </a>
                  </span>
                  <span className="postLike">14</span>
                  <span>1 diffusione post</span>
                </div>
              </div>
              <div className="postCard-footer">
                <button className="action-btn">Consiglia</button>
                <button
                  className="action-btn"
                  onClick={() => setShowComments(!showComments)}
                >
                  Commenta
                </button>
                <button className="action-btn">Diffondi il post</button>
                <button className="action-btn">Invia</button>
              </div>
              <div className={showComments ? "d-block" : "d-none"}>
                <div>
                  <div className="comment-section">
                    <div className="add-comment">
                      <img
                        src="user-avatar.png"
                        alt="Profile Pic"
                        className="avatar"
                      />
                      <input
                        type="text"
                        placeholder="Aggiungi un commento..."
                      />
                    </div>
                    <div className="comments">
                      <div className="comment">
                        <img
                          src="user-pic.png"
                          alt="Profile Pic"
                          className="avatar"
                        />
                        <div className="comment-content">
                          <div className="comment-header">
                            <span className="comment-author">
                              Gabriel Azamfiri
                            </span>
                            <span className="comment-time">
                              · 3° e oltre · 1 settimana
                            </span>
                          </div>
                          <div className="comment-body">
                            <p>
                              Lorem ipsum dolor, sit amet consectetur
                              adipisicing elit. Cum, quas omnis illum voluptatum
                              earum qui sequi.
                            </p>
                          </div>
                          <div className="comment-footer">
                            <span className="recommend">
                              Consiglia ·{" "}
                              <span className="recommend-icons">👍 ❤️</span> 7
                            </span>
                            <a href="#" className="reply">
                              Rispondi
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="comment">
                        <img
                          src="profilepic.png"
                          alt="Profile Picture"
                          className="avatar"
                        />
                        <div className="comment-content">
                          <div className="comment-header">
                            <span className="comment-author">
                              John Guevarra
                            </span>
                            <span className="comment-time">
                              · 3° e oltre · 1 settimana
                            </span>
                          </div>
                          <div className="comment-body">
                            <p>
                              Lorem ipsum dolor, sit amet consectetur
                              adipisicing elit. Cum, quas omnis illum voluptatum
                              earum qui sequi.
                            </p>
                          </div>
                          <div className="comment-footer">
                            <span className="recommend">
                              Consiglia ·{" "}
                              <span className="recommend-icons">❤️</span> 1
                            </span>
                            <a href="#" className="reply">
                              Rispondi
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="comment">
                        <img
                          src="mirco-avatar.png"
                          alt="Profile Picture"
                          className="avatar"
                        />
                        <div className="comment-content">
                          <div className="comment-header">
                            <span className="comment-author">
                              Christian Tripodi
                            </span>
                            <span className="comment-time">
                              · 3° e oltre · 1 settimana
                            </span>
                          </div>
                          <div className="comment-body">
                            <p>
                              Lorem ipsum dolor, sit amet consectetur
                              adipisicing elit. Cum, quas omnis illum voluptatum
                              earum qui sequi.
                            </p>
                          </div>
                          <div className="comment-footer">
                            <span className="recommend">Consiglia</span>
                            <a href="#" className="reply">
                              Rispondi
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
}

export default NewsPost;
