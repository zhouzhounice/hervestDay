#include <iostream>
using namespace std;
 
class drect
{
private:
    float a1, b1, a2, b2;
public:
    drect(float x1, float y1, float x2, float y2):a1(x1), b1(y1), a2(x2), b2(y2){}
    float addarea(drect d)
    {
        return d.a1*d.b1 + d.a2*d.b2;
    }
};
 
int main()
{
    float a,b,c,d;
    cin >> a >> b >> c >> d;
    drect dr(a,b,c,d);
    cout << dr.addarea(dr) << endl;
    return 0;
}