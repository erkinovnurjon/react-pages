const SidebarBtn = ({img,title}) => {
      return (
            <button className="btn sidebar-btn">
                  <span className="img">{img}</span>   <span>{title}</span>
            </button>
      )
}
export default SidebarBtn;