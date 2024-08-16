import React, { useEffect } from "react";
import { preLoaderAnim } from "../animations";
import './preloader.css';

const PreLoader = () => {
  useEffect(() => {
    preLoaderAnim();
  }, []);
  
  return (
    <div className="preloader">
            
<div class="spinner"></div>
    </div>
  );
};

export default PreLoader;