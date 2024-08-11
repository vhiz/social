export default function Ad() {
  return (
    <div className="w-full p-2 text-sm shadow-md">
      <span className="opacity-70">sponsored</span>
      <div className="avatar mt-3 w-full">
        <div className="max-h-28 w-full rounded">
          <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <div className="prose text-xs opacity-80">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia modi
        sit iste voluptate fugit minus dolor quas? Quod dolor ut perferendis
        ipsam error, exercitationem ea iusto quos maiores, itaque reiciendis?
      </div>
      <button className="btn btn-sm mt-2 w-full text-sm font-light opacity-70">Learn more</button>
      <div className="divider opacity-0"></div>
    </div>
  )
}
