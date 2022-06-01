import { memo } from 'react';
function Header({ name }) {
  console.log("Header")
  return (
    <div className="chat-header">
        <div className="header-avatar">
          <img src="https://picsum.photos/500/500" alt="" / >
          <div className="header-status"></div>
        </div>
        <div className="header-name">
        {name}
        </div>
        <div className="header-close">close</div>
      </div>
  )
}

export default memo(Header)
