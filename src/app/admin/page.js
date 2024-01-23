import React, { Suspense } from "react";
import Styles from "./admin.module.css";
import Adminpost from "@/components/adminpost/Adminpost";
import AdminpostForm from "@/components/adminpostForm/AdminpostForm";
import AdminUser from "@/components/adminUser/AdminUser";
import AdminUserForm from "@/components/adminUserForm/AdminUserForm";
import { auth } from "@/lib/auth";

const Admin = () => {
  const session = auth()
  console.log(session)
  return (
    <div className={Styles.container}>
      <div className={Styles.row}>
        <div className={Styles.col}>
          <Suspense>
            <Adminpost />
          </Suspense>
        </div>
        <div className={Styles.col}>
          <AdminpostForm session={session._id} />
        </div>
      </div>
      <div className={Styles.row}>
        <div className={Styles.col}>
          <Suspense>
            <AdminUser />
          </Suspense>
        </div>
        <div className={Styles.col}>
          <AdminUserForm session={session.user} />
        </div>
      </div>
    </div>
  );
};

export default Admin;
