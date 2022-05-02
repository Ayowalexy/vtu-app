import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";


const withRouter = (Component) => {
    const Wrapper = (props) => {
        const params = useParams();
        const navigate = useNavigate(); 
        const dispatch = useDispatch() 
        const user = useSelector(state => state.user) 
        return (
          <Component
            navigate={navigate}
            dispatch={dispatch}
            user={user}
            params={params}
            {...props}
            />
        );
      };

    return Wrapper
}

export default withRouter