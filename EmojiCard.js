// Write your code here.

const EmojiCard = props => {
  const {emoji, onEmojiClick} = props
  const onclickFunc = () => {
    onEmojiClick(emoji.id)
  }



  return (
    <li>
      <button onClick={onclickFunc} className="emoji-card">
        <img
          alt={emoji.emojiName}
          className="emoji"
          alt="emoji"
          src={emoji.emojiUrl}
        />
      </button>
    </li>
  )
}

export default EmojiCard
