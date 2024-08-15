import aframe from 'aframe';
import starsystem from 'aframe-star-system-component';
import outline from 'aframe-outline';
import extras from 'aframe-extras';

aframe.registerComponent('cursor-listener', {
    init: function() {
        this.el.addEventListener('mouseenter', evt => {
            this.el.setAttribute('color', 'blue');
            console.log(evt.detail, this.el);
        });

        this.el.addEventListener('click', evt => {
            const musicEl = this.el.components.sound;
            if (musicEl) {
                musicEl.playSound();
            }
        });
    }
});
