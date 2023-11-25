import styles from './../RegistrationPage.module.sass';

function ArticleQuestions ({ article }) {
  const { title, answer } = article;

  return (
    <article>
      <h3 className={styles.headerArticle}>{title}</h3>
      <p className={styles.article}>{answer}</p>
    </article>
  );
}

export default ArticleQuestions;