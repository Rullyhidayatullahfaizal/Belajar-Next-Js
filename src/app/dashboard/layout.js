import MiniDrawer from "./page";

export default function Layout({ children, product, users }) {
  return (
    <>
      <div className="p-20">
        <div>
          <MiniDrawer />
        </div>
        {/* {children} */}
        <div className="bg-slate-500 mt-5 flex justify-between  gap-">
            {product}
          
          {users}
        </div>
      </div>
    </>
  );
}
