import React from 'react';
import { useTranslation } from 'react-i18next';

function CommentForm() {
  const { t } = useTranslation();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="comment">{t('form.commentLabel')}</label>
      <textarea id="comment" name="comment" required />
      <button type="submit">{t('form.submitButton')}</button>
    </form>
  );
}

export default CommentForm;