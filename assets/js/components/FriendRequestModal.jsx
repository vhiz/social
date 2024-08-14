import React from 'react'
import FriendRequest from './FriendRequest'

export default function FriendRequestModal() {
  return (
    <dialog id="friendRequestModal" className="modal">
      <div className="modal-box max-w-3xl">
        <FriendRequest modal />
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  )
}
