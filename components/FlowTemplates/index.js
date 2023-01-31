const FlowTemplates = ({title, tags, children}) => {
  return (
    <div className={"mx-1 my-4 cursor-pointer"}>
      <div className={"w-80 h-80 border border-zinc-300 rounded-md px-8 py-6 shadow hover:border-zinc-400 duration-200 hover:shadow-md duration-200"}>
        <h2 className={"font-bold mb-6"}>{title}</h2>
        <p className={"text-sm font-medium mb-6"}>{children}</p>
        <div className={"flex flex-wrap"}>
          {tags.map((tag) => (
            <span className={"p-1 mr-1 text-xs border border-blue-500 bg-blue-100 rounded text-sky-800 font-semibold"}>
            {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FlowTemplates;