import React,{Component} from 'react'
import { Icon,Progress } from 'antd';

/**
 * 底部音乐
 */
export default class PlayerBar extends Component {

	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		const {
		    list, current, isPlay,
            allTime, currentTime, audio,
            pause, play, prev, next
		} = this.props;
		const currentMusic = list[current];

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
                            <audio
                                // controls   //显示原始样式
                                src={currentMusic.musicUrl}
                                ref='audio'
                                preload="true"
                                className="lee-music-audio"
                            />
                            <div className="lee-music-l">
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
                                        className={current == (list.length - 1)? 'next-no':null}
                                        onClick={next}
                                    />

                                    <div style={{ width: 170,display: 'inline-block' }}>
                                        {/*歌名*/}
                                        <h4 className="lee-music-l-top">{currentMusic.title}</h4>
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
                                <span><Icon type="heart" theme={currentMusic.collect ? 'filled' : null}/></span>
                            </div>
                        </div>
                    </div>
				</div>
			</div>
			)
	}
}
