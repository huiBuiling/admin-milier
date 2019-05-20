import React,{Component} from 'react'
import { TweenMax } from "gsap/TweenMax";
import Snap from 'snapsvg';

let eyeBigL,eyeBigR,eyeSmallL,eyeSmallR,
	tuiL,tuiR, p;
let i = 0;

export default class Robot extends Component {

	constructor(props) {
		super(props);
		this.state = {
		    // val:'预备！！！',
            robot1:{},
            robot2:{},
            robot3:{},
            robot4:{},
            robot5:{},
            robot6:{},
            robot7:{},
            robot8:{}
		};
	}

    componentDidMount(){
        this.svgInit('#robot' ,'robot1');
        this.svgInit('#robot2','robot2');
        this.svgInit('#robot3','robot3');
        this.svgInit('#robot4','robot4');
        this.svgInit('#robot5','robot5');
        this.svgInit('#robot6','robot6');
        this.svgInit('#robot7','robot7');
        this.svgInit('#robot8','robot8');

        //缩小（由于画大了）
        TweenMax.staggerTo(".robot-svg",0,{opacity:0});
        TweenMax.staggerTo(".robot-svg",1,{scale:.3,opacity:1,top:-180},1);

        TweenMax.staggerTo("#robot",3,{left:-170,rotationZ:20},1);

        TweenMax.staggerTo("#robot2",3,{left:-60},1);

        TweenMax.staggerTo("#robot3",3,{left:20,rotationZ:20},1);

        TweenMax.staggerTo("#robot4",3,{left:130,rotationZ:-20},1);

        TweenMax.staggerTo("#robot5",3,{left:210,rotationZ:20},1);

        TweenMax.staggerTo("#robot6",3,{left:320,rotationZ:-20},1);

        TweenMax.staggerTo("#robot7",3,{left:420,rotationZ:20},1);

        TweenMax.staggerTo("#robot8",3,{left:520,rotationZ:8},1);

        this.loading(".box",1);
    }

    //robot init
    svgInit = (el,name)=>{
        let svg = Snap(el);
        p = svg.path("M10-5-10,15M15,0,0,15M0-5-20,15").attr({
            fill: "none",stroke: "#bada55",strokeWidth: 5
        });
        let header = svg.circle(200, 200, 100).attr({fill: "#bada55", stroke: "#000", strokeWidth: 5});
            header.attr({fill: p.pattern(0, 0, 5, 20)});
        let body = svg.circle(200,430,100).attr({fill: "#bada55", stroke: "#000", strokeWidth: 5});

        eyeBigL = svg.circle(150,200,40);
        eyeBigR = svg.group(eyeBigL, svg.circle(250,200,40)).attr({fill: "#fff"})
        eyeSmallL = svg.circle(150,200,10);
        eyeSmallR = svg.circle(250,200,10);

        const zui = svg.paper.line(200, 250, 200,270).attr({stroke:'#000',strokeWidth: 15});
        const bozi = svg.paper.line(200, 300, 200,330).attr({stroke:'#000',strokeWidth: 10});
        const geboL = svg.paper.line(360, 300, 300,400).attr({stroke:'#000',strokeWidth: 10});
        const geboR = svg.paper.line(260, 300, 200,400).attr({stroke:'#000',strokeWidth: 10});

        tuiL = svg.paper.line(160, 530, 140,650).attr({stroke:'#000',strokeWidth: 10});
        tuiR = svg.paper.line(240, 530, 270,650).attr({stroke:'#000',strokeWidth: 10});

        this.setState({
            [name]:{svg, header, body, eyeBigL, eyeSmallL, eyeBigR,eyeSmallR, tuiL, tuiR},
        })
    }

    play = (el)=>{
	    let self = this;
        let {svg, header, body, eyeBigL, eyeSmallL, eyeBigR,eyeSmallR, tuiL, tuiR} = el;

        // 动作一
        // this.goText('预备！！！');
        this.loading(".box2");

        let i = 0;

        svg.animate(0, 20, function () {
            header.attr({fill: "#bada55"});
            body.attr({fill: "#bada55"});
        });

        // 动作二
        setTimeout(() => {
            // this.goText('刘海飘');
            this.loading(".box3");

            svg.animate(0, 20, function () {
                header.attr({fill: p.pattern(0, 0, 10, 100)});
                body.attr({cx: 200});
                tuiL.attr({x1: 160, x2: 140});
                tuiR.attr({x1: 240, x2: 270});
            });
        }, 1000)

        // 动作三
        setTimeout(() => {
            // this.goText('左眼右眼跳');
            this.loading(".box4");
            this.eyeAnim(svg, eyeBigL, eyeSmallL, 150, "#fff");
            this.eyeAnim(svg, eyeBigR, eyeSmallR, 250, "#fff");
            svg.animate(0, 20, function () {
                header.attr({fill: '#fff'});
                body.attr({cx: 230, fill: '#f38630'});
                tuiL.attr({x1: 230, x2: 140});
                tuiR.attr({x1: 270, x2: 260});
            });
        }, 2000)

        // 动作四
        setTimeout(() => {
            this.loading(".box5");
            svg.animate(0, 20, function () {
                self.eyeAnim(svg, eyeSmallL, eyeBigL, 150, "#000");
                header.attr({fill: '#fff'});
                body.attr({cx: 200, fill: "#bada55"});
                tuiL.attr({x1: 160, x2: 140});
                tuiR.attr({x1: 240, x2: 270});
            });
        }, 3000);
    }

    //svg jump
    jump = (el)=>{
        this.play(el);
	}

    //双眼动画
    eyeAnim = (svg,el1,el2,y,color)=>{
        el1.animate({r: 10}, 1000);
        el2.animate({r: 30}, 1200);
        svg.circle(y,200,10).attr({fill: color});
    }

	//动画说明
    goText = (val)=>{
        this.setState({val:val})
    }

    //方块运动
    loading = (val,flag)=>{
	    if(flag == 1 && flag != undefined){
            TweenMax.staggerTo(val, 1, {rotation:360, y:0}, 0.5);
        }else{
            TweenMax.staggerTo(val, 1, {rotation:360, y:30}, 0.5);
        }
    }

    //调用动画
    nowJump = ()=>{
	    const { robot1, robot2, robot3, robot4, robot5, robot6, robot7, robot8 } = this.state;
        this.jump(robot1);
        this.jump(robot2);
        this.jump(robot3);
        this.jump(robot4);
        this.jump(robot5);
        this.jump(robot6);
        this.jump(robot7);
        this.jump(robot8);
    }

	render() {
		return (
			<div className="robot-all">
                    <div className="loading">
                        <div className="box box1 green"></div>
                        <div className="box box3 grey"></div>
                        <div className="box box3 orange"></div>
                        <div className="box box4 green"></div>
                        <div className="box box4 grey"></div>
                        <div className="box box5 orange"></div>
                        <div className="box box5 green"></div>
                        <div className="box box6 grey"></div>
                        <div className="box box6 orange"></div>
                        <div className="box box1 green"></div>
                        <div className="box box3 grey"></div>
                        <div className="box box3 orange"></div>
                        <div className="box box4 green"></div>
                        <div className="box box4 grey"></div>
                        <div className="box box5 orange"></div>
                        <div className="box box5 green"></div>
                        <div className="box box6 grey"></div>
                        <div className="box box6 orange"></div>
                    </div>
                    <div style={{display:'block'}} className="robot">
                        <div className="robot-btn"><span onClick={this.nowJump}>JUMP</span></div>
                        {/*<div className="robot-opera">{this.state.val}</div>*/}
                        <svg className="robot-svg" id='robot' style={{width:500,height:900}} ></svg>
                        <svg className="robot-svg" id='robot2' style={{width:500,height:900}} ></svg>
                        <svg className="robot-svg" id='robot3' style={{width:500,height:900}} ></svg>
                        <svg className="robot-svg" id='robot4' style={{width:500,height:900}} ></svg>
                        <svg className="robot-svg" id='robot5' style={{width:500,height:900}} ></svg>
                        <svg className="robot-svg" id='robot6' style={{width:500,height:900}} ></svg>
                        <svg className="robot-svg" id='robot7' style={{width:500,height:900}} ></svg>
                        <svg className="robot-svg" id='robot8' style={{width:500,height:900}} ></svg>
                    </div>
			</div>
			)
	}
}
