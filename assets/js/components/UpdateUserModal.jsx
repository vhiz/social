import UpdateUser from './UpdateUser'

export default function UpdateUserModal() {
  return (
    <dialog id="updateUser" className="modal">
      <div className="modal-box max-w-3xl">
        <form method="dialog">
          <button className="btn btn-circle btn-ghost btn-sm absolute right-2 top-2">
            ✕
          </button>
        </form>
        <UpdateUser />
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  )
}
