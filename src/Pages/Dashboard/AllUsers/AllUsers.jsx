import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const AllUsers = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: user = [], refetch } = useQuery(['user'], async () => {
        const res = await axiosSecure.get('/user')
        return res.data;
    })

    const handleMakeAdmin = (singleUser) => {
        fetch(`https://bistro-boss-restaurant-server-awysqwujv-shefathossain7-gmailcom.vercel.app/user/admin/${singleUser._id}`, {
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount) {
                refetch();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `{singleUser.name} is an admin now`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }
    return (
        <div className="w-full">
            <Helmet>
                <title>Bistro Boss | All Users</title>
            </Helmet>
            <h3 className="text-3xl font-semibold my-4">Total users: {user.length}</h3>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            user.map((singleUser, index) => <tr key={singleUser._id}>
                                <th>{index + 1}</th>
                                <td>{singleUser.name}</td>
                                <td>{singleUser.email}</td>
                                <td>{
                                    singleUser.role === 'admin' ? 'admin' :
                                    <button onClick={() => handleMakeAdmin(singleUser)} className="btn btn-ghost btn-sm text-white bg-orange-500"><FaUserShield></FaUserShield></button>
                                    }</td>
                                <td></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;