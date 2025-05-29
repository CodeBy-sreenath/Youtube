import React from 'react';
import './Sidebar.css';
import home from '../../assets/home.png';
import shorts from '../../assets/shorts.webp';
import images from '../../assets/images.png';
import image from '../../assets/image.png';
import playlist from '../../assets/playlist.png';
import watchlater from '../../assets/watchlater.webp';
import like from '../../assets/like.png';
import Asianet from '../../assets/Asianet.jpg';
import flowers from '../../assets/flowers.png';
import Manorama from '../../assets/Manorama.png';
import Mazhavil_Manorama from '../../assets/Mazhvil_Manorama.jpg';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-section">
        <SidebarItem icon={home} label="Home"  />
        <SidebarItem icon={shorts} label="Shorts"  />
        <SidebarItem icon={images} label="Subscriptions" />
        <hr />
      </div>

      <div className="sidebar-section">
        <SidebarItem icon={image} label="History" />
        <SidebarItem icon={playlist} label="Playlists" />
        <SidebarItem icon={watchlater} label="Watch Later" />
        <SidebarItem icon={like} label="Liked Videos" />
        <hr />
      </div>

      <div className="sidebar-section">
        <h3 className="section-title">Subscriptions</h3>
        <SidebarItem icon={Asianet} label="Asianet News" />
        <SidebarItem icon={flowers} label="Flowers" />
        <SidebarItem icon={Mazhavil_Manorama} label="Mazhavil" />
        <SidebarItem icon={Manorama} label="Manorama" />
      </div>

      <div className="sidebar-footer">
        <p>
          About Press Copyright Contact us Creators Advertise Developers<br />
          Terms Privacy Policy & Safety How YouTube works Test new features<br />
          © 2025 Google LLC
        </p>
      </div>
    </div>
  );
};

const SidebarItem = ({ icon, label }) => (
  <div className="sidebar-item">
    <img src={icon} alt={label} />
    <span>{label}</span>
  </div>
);

export default Sidebar;
