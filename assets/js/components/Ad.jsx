export default function Ad() {
  return (
    <div className="w-full p-2 text-sm shadow-md">
      <span className="opacity-70">sponsored</span>
      <div className="avatar mt-3 w-full">
        <div className="max-h-28 w-full rounded">
          <img src="https://images.unsplash.com/photo-1568667185695-edcbcd4938cb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D" />
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
