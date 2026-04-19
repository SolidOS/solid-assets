import '@solidos/tokens/themes.css';
import '@solid/ui/styles.css';
import { createUiIcon, createUiIconPurple, createUiIconWhite, createLogo, toggleTheme } from '@solid/ui';

import bentoIcon from '@solidos/icons/icons/bento.svg?raw';
import birthdayIcon from '@solidos/icons/icons/birthday.svg?raw';
import cameraIcon from '@solidos/icons/icons/camera.svg?raw';
import chatIcon from '@solidos/icons/icons/chat.svg?raw';
import clockIcon from '@solidos/icons/icons/clock.svg?raw';
import commentIcon from '@solidos/icons/icons/comment.svg?raw';
import dashboardIcon from '@solidos/icons/icons/dashboard.svg?raw';
import deleteIcon from '@solidos/icons/icons/delete.svg?raw';
import downArrowIcon from '@solidos/icons/icons/downArrow.svg?raw';
import emailIcon from '@solidos/icons/icons/email.svg?raw';
import emptyCircleIcon from '@solidos/icons/icons/emptyCircle.svg?raw';
import emptyCircle2Icon from '@solidos/icons/icons/emptyCircle2.svg?raw';
import folderIcon from '@solidos/icons/icons/folder.svg?raw';
import friendsIcon from '@solidos/icons/icons/friends.svg?raw';
import globeIcon from '@solidos/icons/icons/globe.svg?raw';
import lightningIcon from '@solidos/icons/icons/lightning.svg?raw';
import locationIcon from '@solidos/icons/icons/location.svg?raw';
import mainEditIcon from '@solidos/icons/icons/mainEdit.svg?raw';
import personInCircleIcon from '@solidos/icons/icons/personInCircle.svg?raw';
import phoneIcon from '@solidos/icons/icons/phone.svg?raw';
import plusIcon from '@solidos/icons/icons/plus.svg?raw';
import purpleCheckBoxIcon from '@solidos/icons/icons/purple-checkBox.svg?raw';
import purpleCheckBox1Icon from '@solidos/icons/icons/purple-checkBox1.svg?raw';
import purpleCheckMarkIcon from '@solidos/icons/icons/purple-checkMark.svg?raw';
import purpleCloseIcon from '@solidos/icons/icons/purple-close.svg?raw';
import purpleEditIcon from '@solidos/icons/icons/purple-edit.svg?raw';
import purpleHelpIcon from '@solidos/icons/icons/purple-help.svg?raw';
import purplePasteIcon from '@solidos/icons/icons/purple-paste.svg?raw';
import purplePersonIcon from '@solidos/icons/icons/purple-person.svg?raw';
import purpleProfileIcon from '@solidos/icons/icons/purple-profile.svg?raw';
import searchIcon from '@solidos/icons/icons/search.svg?raw';
import sharingIcon from '@solidos/icons/icons/sharing.svg?raw';
import signOutIcon from '@solidos/icons/icons/signOut.svg?raw';
import solidIcon from '@solidos/icons/icons/solid.svg?raw';
import trashIcon from '@solidos/icons/icons/trash.svg?raw';
import twoDownArrowsIcon from '@solidos/icons/icons/twoDownArrows.svg?raw';
import whiteStarInSquareIcon from '@solidos/icons/icons/white-starInSquare.svg?raw';
import logoUrl from '@solidos/icons/logos/discord.png';

// Apply the default light theme.
document.documentElement.dataset.theme = 'light';

const iconEntries = [
  { name: 'bento', icon: bentoIcon },
  { name: 'birthday', icon: birthdayIcon },
  { name: 'camera', icon: cameraIcon },
  { name: 'chat', icon: chatIcon },
  { name: 'clock', icon: clockIcon },
  { name: 'comment', icon: commentIcon },
  { name: 'dashboard', icon: dashboardIcon },
  { name: 'delete', icon: deleteIcon },
  { name: 'downArrow', icon: downArrowIcon },
  { name: 'email', icon: emailIcon },
  { name: 'emptyCircle', icon: emptyCircleIcon },
  { name: 'emptyCircle2', icon: emptyCircle2Icon },
  { name: 'folder', icon: folderIcon },
  { name: 'friends', icon: friendsIcon },
  { name: 'globe', icon: globeIcon },
  { name: 'lightning', icon: lightningIcon },
  { name: 'location', icon: locationIcon },
  { name: 'mainEdit', icon: mainEditIcon },
  { name: 'personInCircle', icon: personInCircleIcon },
  { name: 'phone', icon: phoneIcon },
  { name: 'plus', icon: plusIcon },
  { name: 'purple-checkBox', icon: purpleCheckBoxIcon },
  { name: 'purple-checkBox1', icon: purpleCheckBox1Icon },
  { name: 'purple-checkMark', icon: purpleCheckMarkIcon },
  { name: 'purple-close', icon: purpleCloseIcon },
  { name: 'purple-edit', icon: purpleEditIcon },
  { name: 'purple-help', icon: purpleHelpIcon },
  { name: 'purple-paste', icon: purplePasteIcon },
  { name: 'purple-person', icon: purplePersonIcon },
  { name: 'purple-profile', icon: purpleProfileIcon },
  { name: 'search', icon: searchIcon },
  { name: 'sharing', icon: sharingIcon },
  { name: 'signOut', icon: signOutIcon },
  { name: 'solid', icon: solidIcon },
  { name: 'trash', icon: trashIcon },
  { name: 'twoDownArrows', icon: twoDownArrowsIcon },
  { name: 'white-starInSquare', icon: whiteStarInSquareIcon }
];

const icons = iconEntries.map((entry) => createUiIcon(entry.icon, entry.name));
const purpleHelp = createUiIconPurple(purpleHelpIcon, 'Purple Help');
const whiteStar = createUiIconWhite(whiteStarInSquareIcon, 'White Star');

document.getElementById('icons')?.append(...icons, purpleHelp, whiteStar);

document.getElementById('logo')?.appendChild(createLogo(logoUrl, 'SolidOS'));

document.getElementById('theme-toggle')?.addEventListener('click', toggleTheme);
