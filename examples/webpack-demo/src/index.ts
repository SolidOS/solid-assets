import '@solidos/tokens/themes.css';
import '@solid/ui/styles.css';
import { createUiIcon, createLogo, toggleTheme } from '@solid/ui';

import bentoIcon from '@solidos/icons/icons/bento.svg';
import birthdayIcon from '@solidos/icons/icons/birthday.svg';
import cameraIcon from '@solidos/icons/icons/camera.svg';
import chatIcon from '@solidos/icons/icons/chat.svg';
import clockIcon from '@solidos/icons/icons/clock.svg';
import closeIcon from '@solidos/icons/icons/close.svg';
import commentIcon from '@solidos/icons/icons/comment.svg';
import darkBluePersonIcon from '@solidos/icons/icons/darkBlue-person.svg';
import dashboardIcon from '@solidos/icons/icons/dashboard.svg';
import deleteIcon from '@solidos/icons/icons/delete.svg';
import downArrowIcon from '@solidos/icons/icons/downArrow.svg';
import whiteDownArrowIcon from '@solidos/icons/icons/white-downArrow.svg';
import editIcon from '@solidos/icons/icons/edit.svg';
import emailIcon from '@solidos/icons/icons/email.svg';
import emptyCircleIcon from '@solidos/icons/icons/emptyCircle.svg';
import folderIcon from '@solidos/icons/icons/folder.svg';
import friendsIcon from '@solidos/icons/icons/friends.svg';
import whiteGlobeIcon from '@solidos/icons/icons/white-globe.svg';
import whiteHelpIcon from '@solidos/icons/icons/white-help.svg';
import lightningIcon from '@solidos/icons/icons/lightning.svg';
import locationIcon from '@solidos/icons/icons/location.svg';
import mainEditIcon from '@solidos/icons/icons/mainEdit.svg';
import pasteIcon from '@solidos/icons/icons/paste.svg';
import whitePersonIcon from '@solidos/icons/icons/white-person.svg';
import personInCircleIcon from '@solidos/icons/icons/personInCircle.svg';
import phoneIcon from '@solidos/icons/icons/phone.svg';
import plusIcon from '@solidos/icons/icons/plus.svg';
import purpleCheckBoxIcon from '@solidos/icons/icons/purple-checkBox.svg';
import purpleCheckBox1Icon from '@solidos/icons/icons/purple-checkBox1.svg';
import purpleCheckMarkIcon from '@solidos/icons/icons/purple-checkMark.svg';
import purpleEmptyCircleIcon from '@solidos/icons/icons/purple-emptyCircle.svg';
import purplePasteIcon from '@solidos/icons/icons/purple-paste.svg';
import purplePlus2Icon from '@solidos/icons/icons/purple-plus2.svg';
import purpleProfileIcon from '@solidos/icons/icons/purple-profile.svg';
import purpleTwoDownArrowsIcon from '@solidos/icons/icons/purple-twoDownArrows.svg';
import searchIcon from '@solidos/icons/icons/search.svg';
import sharingIcon from '@solidos/icons/icons/sharing.svg';
import signOutIcon from '@solidos/icons/icons/signOut.svg';
import solidIcon from '@solidos/icons/icons/solid.svg';
import whiteStarIcon from '@solidos/icons/icons/white-star.svg';
import trashIcon from '@solidos/icons/icons/trash.svg';
import personIcon from '@solidos/icons/icons/person.svg';
import logoUrl from '@solidos/icons/logos/discord.png';

// Apply the default light theme; change to 'dark' for the dark variant.
document.documentElement.dataset.theme = 'light';

// Toggle theme on button click.
const toggleBtn = document.getElementById('theme-toggle');
toggleBtn?.addEventListener('click', toggleTheme);

document.getElementById('icons')?.append(
  createUiIcon(searchIcon, 'Search'),
  createUiIcon(personIcon, 'Profile')
);

// Render the multi-color logo via <img>.
const logo = createLogo(logoUrl, 'SolidOS');
document.getElementById('logo')?.appendChild(logo);
