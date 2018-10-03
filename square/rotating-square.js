"use strict";


var canvas;
var gl;
var theta = 0.0;
var theta_loc;

window.onload = function init()
{
    canvas = document.getElementById('gl-canvas');
    gl = WebGLUtils.setupWebGL(canvas);

    if(!gl)
    {
        this.alert("webgl not avaliable");
    }

    gl.viewport(0,0,canvas.width, canvas.height);
    gl.clearColor(1.0,1.0,1.0,1.0);

    let program = initShaders(gl, './rotating-shape-vert.glsl',
    './rotating-shape-frag.glsl');

    gl.userProgram(program);

    let vertices = [
        vec2( 0, 1 ),
        vec2(-1, 0 ),
        vec2( 1, 0 ),
        vec2( 0, -1 )
        ];

    let vertex_buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vertext_buf);
    gl.bufferData(gl.ARRAY_BUFFER,flatten(vertices), gl.STATIC_DRAW);

    let vertex_loc = gl.getAttribLocation(program, 'vertex');
    gl.vertexAttribPointer(vertex_loc,2,gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(vertex_loc);

    theta_loc = gl.getUniformLocation(program, 'theta');
    render();

};

function render(){
    gl.clear(gl.COLOR_BUFFER_BIT);
    theta += theta_step;
    gl.uniform1f(theta_loc, theta);
    let num_strip_verticies = vertices.length;
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, num_strip_vertices);
    window.requestAnimFrame(render);
}