// const handleMovement = (e) => {
//     const boat = document.getElementById("playable");

//     let left = parseInt(boat.style.left);
//     let bottom = parseInt(boat.style.bottom);
//     const speed = 10;
//     console.log(left);

//     if (e.key === 'a') {
//         // if (left <= 0) return (boat.style.left = 0);
//         boat.style.left = left - speed + 'px';
//     } else if (e.key === 'd') {
//         // if (left >= 175) return (boat.style.left = 175);
//         boat.style.left = left + speed + 'px';
//     }
//     if (e.key === 'w') {
//         // if (bottom >= 0) return (boat.style.bottom = 0);
//         boat.style.bottom = bottom + speed + 'px';
//     } else if (e.key === 's') {
//         // if (bottom <= -175) return (boat.style.bottom = -175);
//         boat.style.bottom = bottom - speed + 'px';
//     }
// };

// window.addEventListener('keydown', handleMovement);