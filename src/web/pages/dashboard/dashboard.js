import { useStoreState } from "easy-peasy";
import List from "../../components/list/list";

const Dashboard = () =>{
    const savedData = useStoreState((state) => state.data);

    return (
        <div className="row">
            <div className="">
                {savedData.map((el, index) => (
                    <List key={index} element={el} />
                ))}
        </div>
    </div>
        
    );
}
export default Dashboard;