attribute vec4 vertex;
uniform float theta;
void main()
{
	float s = sin(theta);
	float c = cos(theta);
	gl_Position.x = c

	vertex.x - s

	vertex.y;
	gl_Position.y = s

	vertex.x + c

	vertex.y;
	gl_Position.z = 0.0;
	gl_Position.w = 1.0;
}
