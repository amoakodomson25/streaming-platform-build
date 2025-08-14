const musicPlayer2 = () => {
  return (
    <div className="music-player-wrapper">
      <div className="currently-playing-info">
        <div className="currently-playing-info-image-wrapper">
          <img
            src="https://source.boomplaymusic.com/group10/M00/04/08/d369f7cd8e17430ebe3c39b9741cbc6f_320_320.jpg"
            alt="Song Cover"
            className="currently-playing-info-image"
          />
        </div>
        <div className="currently-playing-info-details">
          <h2 className="currently-playing-info-title">Don't Let Go</h2>
          <p className="currently-playing-info-artist">Abalo!</p>
        </div>
      </div>
      <div className="currently-playing-controls">
        <div className="currently-playing-controls-buttons">
        <div className="currently-playing-controls-button">
          <i className="fi fi-sr-shuffle"></i>
        </div>
          <div className="currently-playing-controls-button">
            <i className="fi fi-ss-step-backward"></i>
          </div>
          <div className="currently-playing-controls-button">
            <i className="fi fi-sr-play"></i>
          </div>
          <div className="currently-playing-controls-button">
            <i className="fi fi-ss-step-forward"></i>
          </div>
          <div className="currently-playing-controls-button">
          <i className="fi fi-sr-arrows-repeat"></i>
        </div>
        </div>
        <div className="currently-playing-controls-progress-bar-wrapper">
          <div class="current-time">1:25</div>
          <div class="progress-wrapper">
            <div class="progress-bar">
              <div class="progress"></div>
              <div class="progress-thumb"></div>
            </div>
          </div>
          <div class="total-duration">2:32</div>
        </div>
      </div>
      <div className="other-controls">


        <div className="currently-playing-controls-button">
          <i className="fi fi-rr-window-maximize"></i>
        </div>

      </div>
    </div>
  );
};

export default musicPlayer2;
