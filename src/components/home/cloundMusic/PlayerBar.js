import React,{Component} from 'react'
import { Icon,Progress } from 'antd';
import { connect } from 'react-redux';

/**
 * 底部音乐
 */
@connect(
    state=>state
)
export default class PlayerBar extends Component {

	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
	    const { songList } = this.props.player;
		const {
		    audio, isPlay, current,
            allTime, currentTime,
            play, pause, prev, next
		} = this.props;
		const currentMusic = songList[current];

		let percent = 0;
		if(audio != undefined) {
           percent = (audio.currentTime / audio.duration) * 100;
        }

        const pauseCurrent = isPlay ? (percent == 100 ? false : true) : false;
		return (
			<div className="lee-rbb-all">
				<div className="lee-music-bar">
                    <div className="lee-image-item">
                        <img src={currentMusic.url} alt=""/>
                        <div className="lee-music">
                            <div className="lee-music-l">
                                <div className="lee-music-l-top">
                                    {/*歌名*/}
                                    <h4>{currentMusic.title}</h4>
                                </div>
                                <div className="lee-music-l-bot">
                                    <Icon
                                        type="caret-left"
                                        theme="outlined"
                                        className={current == 0 ? 'prev-no':null}
                                        onClick={prev}
                                    />

                                    {/*播放|暂停*/}
                                    {pauseCurrent ?
                                        <Icon type="pause-circle" theme="outlined" onClick={pause}/>
                                        :
                                        <Icon type="play-circle" theme="outlined" onClick={play}/>
                                    }


                                    <Icon
                                        type="caret-right"
                                        theme="outlined"
                                        className={current == (songList.length - 1)? 'next-no':null}
                                        onClick={next}
                                    />

                                    <div style={{ width: 200,display: 'inline-block' }}>
                                        <Progress
                                            percent={percent}
                                            format={percent => `${currentTime} / ${allTime}`}
                                            size="small" status={percent == 100 ? 'success':'active'}
                                            successPercent
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="lee-music-r">
                                <Icon type="heart" theme={currentMusic.collect ? 'filled' : null} />
                            </div>
                        </div>
                    </div>
				</div>
			</div>
			)
	}
}
