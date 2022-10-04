import React from "react";
import {Link} from "react-router-dom";

const FrameBreadcrumbUI = () => {
    return (
        <div className="admin-breadcrumb">
            <div className="admin-breadcrumb-nav">
                <Link to="/">我的</Link>/
                <Link to="/apps">个人中心</Link>
            </div>
        </div>
    );
}

export default FrameBreadcrumbUI