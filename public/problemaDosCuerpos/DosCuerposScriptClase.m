%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO%
%                                                                         %
%                          MECÁNICA CLÁSICA                               %
%                      Laboratorio de Simulación                          %
%                     Problema de los Dos Cuerpos                         %
%                                                                         %
%OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%


%%
%**************************************************************************
%*            PARÁMETROS DEL PROBLEMA Y CONDICIONES INICIALES             *
%**************************************************************************
%
%  Dada la conveniencia de trabajar con magnitudes próximas a la unidad,
%  las variables del problema se expresarán usando unidades canónicas (tal
%  como se explica en los guiones de la práctica). Con este fin, se
%  introducen las siguientes unidades de longitud, masa y tiempo:
%
%   UL: Distancia característica del problema. La distancia inicial entre
%       cuerpos se da en estas unidades.
%   UM: Se toma tal que la masa del primario en unidades canónicas es m1=1
%   UT: Se escoge de forma que G·m1=1 en unidades canónicas, resultando
%       UT=sqrt(UL^3/(G·m1)). Coincide con el tiempo que tarda un cuerpo
%       de masa despreciable en recorrer un radián de órbita circular de
%       radio UL alrededor del primario.
%
%  Lo anterior equivale a sustituir G=1 y m1=1 en las ecuaciones.
%  La masa del secundario será m2/m1.


% Se selecciona el formato largo (15 cifras decimales) para representar los
% resultados numéricos en pantalla
format 'long';

% Valores de G y m1 en unidades canónicas
G  = 1;
m1 = 1;


% Las condiciones iniciales del primario son iguales para todos los grupos:
r10 = [ 0, 0, 0 ];  % Inicialmente en el origen
v10 = [ 0, 0, 0 ];  % Inicialmente en reposo


% Las condiciones iniciales del secundario se asignan en base a los números
% de expeniente de los miembros del grupo. Si hay menos de 4 miembros, el
% resto se dejan a 0.
num_exp =   [   190235
                190499
                170229
                ];

% Se aplica el algoritmo dado en los guiones para obtener las condiciones
% iniciales del secundario:
% m2,  r20 = [ 0, d, 0 ]  y  v20 = [+-v0, 0, 0 ].
sum_exp = sum(num_exp);
i1 = mod( sum_exp, 10 );
i2 = mod( fix(sum_exp/10), 10 );
i3 = mod( fix(sum_exp/100), 10 );

% 2020 Solo un caso, con distintos tipos de orbita
tabla_cond = [  0.0123  0.10    0.20    0.30    0.40    0.50    0.55    0.60    0.65    0.70
                1.00    1.15    1.25    1.35    1.45    1.55    1.65    1.75    1.85    1.95
                 0.055   0.10   0.15    0.20    0.25    1.00    1.10    1.50    1.75    2.00    ];

m2         = tabla_cond(1,i1+1);
r_p          = tabla_cond(2,i2+1);
excen0    = tabla_cond(3,i3+1);

% Cálculo del resto de las condiciones iniciales

mu = (1+m2);       % Parámetro gravitatorio modificado

% La velocidad puede calcularse de la ecuación e^2=1+2*h^2*E/mu^2, 
% pero sale una ecuación bicuadrada en v, con muchos errores numéricos
% Mejor aprovechar que estamos en el pericentro, y obtenerla de la 
% conservación del momento cinético: v * r_p =h, donde
% r_p = (h^2/mu)/(1+excen0) 
% órbita elíptica, o el único real en hiperbólica. Se elige
% arbitrariamente el signo positivo.
v0_caso1 = sqrt( mu/r_p*(1+excen0) );

% Finalmente se tiene para las condiciones iniciales de m2:
r20        = [ r_p, 0, 0 ];
v20  = [ 0, v0_caso1, 0 ];


% Se muestran los valores obtenidos por pantalla
fprintf('m2 = %12.9f\nd = %12.9f\ne_caso1 = %12.9f\n',...
    m2, r_p, excen0)
fprintf('r20 = [%12.9f , %12.9f, %12.9f ]\n',r20 )
fprintf('v20_caso1 = [ %12.9f, %12.9f, %12.9f ]\n',v20 )


%%
%*************************************************************************
%*                        ANÁLISIS DE RESULTADOS                         *
%*************************************************************************

% Se cargan los datos generados por el código de simulación. Este script
% asume que las órbitas han sido integradas en EJES INERCIALES.
% 2018 Delimiter modificado a ';' para facilitar importación - MRD

filename = 'DosCuerposData.txt'; % Nombre del fichero a cargar
delimiter = ';';                 % Símbolo empleado como separador de valores
headerlines = 3;                 % Número de líneas de cabecera

% Matlab puede importar datos numéricos desde ficheros de texto empleando
% la función 'importdata', o desde la interfaz gráfica (click derecho en
% el archivo -> Import Data... ).
datastruct = importdata(filename, delimiter, headerlines );


% Se separan los datos importados en 5 matrices, correspondientes al
% tiempo de simulación y a las posiciones y velocidades de cada cuerpo.
% Cada fila representa un instante de tiempo.
% El operador '.' sirve para referise a campos de estructuras (variables
% que contienen otras variables). La información recuperada por 'importdata'
% está en un campo llamado 'data' y que corresponde a una matriz.
% El operador ':' se emplea para definir rangos de valores (si no se
% indica el valor inicial/final Matlab asume que es el primer/último
% índice del array).
t  = datastruct.data(:,1);

r1 = datastruct.data(:,2:4);
r2 = datastruct.data(:,8:10);

v1 = datastruct.data(:,5:7);
v2 = datastruct.data(:,11:13);


% Se verifica que las condiciones iniciales corresponden a las calculadas
% anteriormente (caso 1 o 2)
tol = 1e-4;
if ( norm(r1(1,:)-r10,2)>tol || norm(v1(1,:)-v10,2)>tol ||...
        norm(r2(1,:)-r20,2)>tol ||...
        ( norm(v2(1,:)-v20,2)>tol  ) )
    error('Las condiciones iniciales no coinciden')
else
    fprintf('INFO: C.I. correctas (salvo m2: comprobar).\nDatos cargados en memoria\n')
end



%%
%*************************************************************************
%*                 REPRESENTACIÓN GRÁFICA DE RESULTADOS                  *
%*************************************************************************

% Trayectorias en ejes inerciales

% Se crea una nueva figura vacía
% El movimiento es en el plano Oxy
figure
% Trayectoria del primario:
plot(r1(:,1), r1(:,2), 'r', 'Linewidth', 4);
% Se retiene la figura para poder añadir curvas originales sin eliminar la
% anterior.
hold on
% Trayectoria del secundario: b es color azul
plot(r2(:,1), r2(:,2), 'b', 'Linewidth', 2);
% cuadríacula
grid on;
% Etiquetas del eje x y del eje y
xlabel('distancias en la dirección del eje x (UL) ');
ylabel('coordenada en la dirección del eje y (UL)');
% Título de la gráfica. No es necesario si se pone pie a la figura.
title('Tayectoria de ambos cuerpos en ejes inerciales (OXY)');
% Etiquetas de cada curva
legend({'Primario', 'Secundario'});
% Que todos los ejes estén a la misma escala:
pbaspect([1,1,1]);
%svg


%%
% Trayectoria y hodógrafa del centro de masas
% Al ser un sistema aislado, el movimiento del CdM debe ser uniforme.
% La posición y velocidad de CM se calcula con las fórmulas conocidas,
% pero aplicadas a las matrices:
rCM = (r1+m2*r2)/(1+m2);
vCM = (v1+m2*v2)/(1+m2);

% trayectoria del Cm en Oxz inerciales
figure
plot(rCM(:,1), rCM(:,2), 'g', 'LineWidth', 1 );
grid on;
xlabel('distancias en la dirección del eje x (UL)');
ylabel('distancias en la dirección del eje y (UL)');
title('Trayectoria del centro de masas')
% Explicar los distintos órdenes de magnitud
% ¿Qué tendría que salir?
% Esto tiene sentido puesto que el centro de masas se encontrara a una
% distancia intermedia entre los dos cuerpos y se movera a lo largo del eje
% y aunque en la gráfica se aprecian pequeñas oscilaciones, estas se
% explican facilmente por el fallo de la integración númerica. Es por esto
% que si nos fijamos en la escala, los ordenes de magnitud son distintos,
% en el eje y la posición varía considerablemente (como esperabamos al solo 
%haber velocidad inicial en el eje y) mientras que en el eje x las únicas 
%variables son las asociadas al error de la integración númerica.



% Hodógrafa del CM
figure
plot(vCM(:,1),  vCM(:,2), 'g', 'LineWidth' , 1 );
grid on;
xlabel('distancias en la dirección del eje x (UL)');
ylabel('distancias en la dirección del eje y (UL)');
title('Hodógrafa del centro de masas')
% Aquí hay que explicar por qué sale tan raro
% ¿Qué tendría que salir según la teoría?
%La hodógrafa es la  la curva que describen los afijos del vector velocidad
%de un punto cuando sus orígenes se sitúan en el origen del sistema de
%referencia del movimiento. Pero en este caso como el vector velocidad es
%constante debería ser un punto. Lo que pasa es que debido a las
%aproximaciones asociadas al cálculo numérico,se introduce un error, que
%aunque pequeño, provoca que ese punto se distorsione espacialmente como
%vemos en la gráfica. Esto queda de manifiesto al observarse como en la
%gráfica la escala nos indica que su trayectoria es infinitesimalmente
%pequeña, en el eje X es del orden 10 a la menos 17 mientras que en y solo
%podemos asegurar que el error es inferior a 10 a la menos 14. Quedando
%esta trayectoria totalmente equiparable a un punto.



%%
% Trayectoria y hodógrafa del movimiento relativo de 2 respecto a 1
% Posición y velocidad relativas a ejes paralelos a los fijos, con 
% origen en el primario:
r = r2 - r1;
v = v2 - v1;

% Cálculos en t=0, con los valores iniciales
% mu se ha calculado al principio
h0vec = cross ( r20, v20 );
h0 = norm ( h0vec, 2) ;
v0norm = norm ( v20, 2 ) ;
r0norm = norm ( r20, 2 ) ; 
T0 = v0norm*v0norm / 2. ;
V0 = - mu / r0norm ; 
E0 = T0 + V0 ;
p0 = h0 * h0 / mu ;
%if (abs(excen0-1.0)>1.e-8)
evec0 = -r20/r0norm - cross(h0vec, v20)/mu;
a0 = abs( p0 / (1 - excen0 * excen0 ) ) ; % absoluto, por las hiperbólicas
if ( excen0 < 1 )
    Periodo = 2 * pi *sqrt( a0*a0*a0 / mu ) ;
end
if ( abs (excen0 -1. ) < 1.e-8 )
    n0 = sqrt( mu / (p0^3) ) ; 
else
    n0 = sqrt ( mu / a0^3 ) ;
end
%
% representamos la trayectoria respecto al primario


% En 2D. Mejor, que el movimiento es plano
figure
plot(r(:,1),  r(:,2), 'b', 'LineWidth', 1 );
% Podemos representer también un círculo para comparar
hold on;
th = 0:pi/30:2*pi;
plot(0.01 * cos( th ), 0.01 * sin ( th ) , 'r','LineWidth', 10);
hold off;
grid on;
xlabel('distancias en la dirección del eje x (UL)');
ylabel('distancias en la dirección del eje y (UL)');
title('Trayectoria respecto al primario');
% Que todos los ejes estén a la misma escala:
daspect([1 1 1]); 
axis equal;


%% 

% En un movimiento kepleriano, la hodógrafa es una circunferencia que
% rodea al origen en el caso de órbita elíptica, es tangente al origen en
% el caso de órbita parabólica, y no rodea al origen en el caso de órbita
% hiperbólica.
% calculamos el centro y radio de la hodógrafa
radh = mu / h0;
yhod = excen0 * radh ; 

% Representaremos un número razonable de puntos, por ejemplo 50
% primero vemos cuántos hay y vemos el salto que hay que dar
% pasándolo a enteros
salto = round ( size (t, 1 ) / 50  );

% Curva 2D
figure
grid on;
% Podemos representar el la hodógrafa teórica para comparar
th = 0:pi/30:2*pi;
plot(radh * cos( th ), radh * sin ( th ) + yhod, 'k');
hold on;
% ahora los valores simulados
plot(v(1:salto:end,1),  v(1:salto:end,2), 'mo', 'LineWidth', 2 );
hold off;
% Que todos los ejes estén a la misma escala:
axis equal;
xlabel('distancias en la dirección del eje x (UL)');
ylabel('distancias en la dirección del eje y (UL)');
title('Comparación entre Hodógrafa Teórica y Simulada');
legend('Teórico', 'Simulado');




%% 
% Calculamos los valores de interés para cada punto de la órbita
% primero se diemensionan las matrices con el número de filas de  r o t

h= 0*r;        % vector momento cinético específico
evec = h;          % vector excentricidad
enorm  = 0*t;      % norma del vector excentricidad
hnorm  = enorm;    % horma del momento cinético
rrnorm = enorm;    % norma del radio
vrnorm = enorm;    % norma de la velocidad
T      = enorm;    % Energía cinética
V      = enorm;    % En. Potencial
E      = enorm;    % En. Mecánica específica
for i=1:length(t)
    h(i,:)    = cross( r(i,:), v(i,:) );
    hnorm(i)  = norm( h(i,:), 2 );
    evec(i,:) = -r(i,:)/norm(r(i,:),2) - cross(h(i,:),v(i,:))/mu;
    enorm(i)  = norm(evec(i,:));
    rrnorm(i) = norm(r(i,:),2);
    vrnorm(i) = norm(v(i,:),2);
    T(i)      = vrnorm(i).^2/2;
    V(i)      = -mu / rrnorm(i);
end


% punto que complete la órbita (e<1) o pasa de 90º (e>1)
% e intervalo para 10 valores equidistantes
% para las tablas de E y e


if (excen0<1. && abs(excen0-1.)> 1.e-4 ) % cuidado con el caso 1.0 float
    % buscamos que y cruce Ox, con x del mismo signo que al principio
    % y empezamos en 3 para que no cuente el principio
    icross = find( (r(3:end,1).*r(2:end-1,1)<=0) & (r(3:end,1)*r20(1,1)>0), 1) + 1;
else 
    for i=1:length(t)
        if (r(i,1)<0)
             icross=i;
             break
        end
    end
end
% salto para tener 10 valores repartidos uniformemente
% y poder hacer las tablas que se piden
salto = floor(icross / 10);
% 
for i=1:salto:icross
fprintf('t=%16.14f,\t ex=%16.14f,\t ey=%16.14f,\t ez=%16.14f\n', t(i), evec(i,:))
end
fprintf('\n');
%se observa que el modulo de la excentricidad es constante (en los datos
%obtenidos por cálculo numerico aparece un error asociado a la integración
%y la truncación de decimales) y que siempre apunta en la unicamente en la
%dirección del eje X (apunta siempre al pericentro).

for i=1:salto:icross
fprintf('t=%16.14f,\t T=%16.14f,\t V=%16.14f,\t E=%16.14f\n', t(i), T(i),V(i),T(i)+V(i))
end
fprintf('\n');
% Se puede apreciar como la energia cinetica va disminuyendo mientras la
% potencial va aumentando y como la suma de las dos es constante
% (despreciando la variación del último decimal a causa del error de la
% integración numerica) y positiva como le corresponde a una órbita
% hiperbólica.



% figure
% plot(t(:), evec(:,1));
% grid on;
% xlabel('qué es esto, y qué unidades');
% ylabel('qué representa y en qué unidades');
% title('Esta curva será algo interesante, digo yo...');
% 
% figure
% plot(t(:), evec(:,2));
% grid on;
% xlabel('qué es esto, y qué unidades');
% ylabel('qué representa y en qué unidades');
% title('Esta curva será algo interesante, digo yo...');
% 
% figure
% plot(t(:), evec(:,3));
% grid on;
% xlabel('qué es esto, y qué unidades');
% ylabel('qué representa y en qué unidades');
% title('Esta curva será algo interesante, digo yo...');

figure
plot(t(:),V(:), t(:), T(:), t(:), T(:)+V(:) );
grid on;
xlabel('Tiempo transcurrido (UT)');
ylabel('Energía (UCE)');
legend('V', 'T', 'E');
title('Evolución respecto al tiempo de las energías cinética, potencial y mecánica');
%Como era de esperar en un problema de kepler, la energía mecánica se
%conserva y la suma es positiva (se trata de una órbita hiperbólica).

figure
plot(t(:),V(:)+T(:));
grid on;
xlabel('Tiempo transcurrido (UT)');
ylabel('Energía (UCE)');
title('Evolución respecto al tiempo de la energía mecánica');
%Representando la energía mecánica independendientemente, la escala se
%amplia enormemente y se pueden observar esas variaciones, que aunque
%puedan parecer significativas, al fijarnos en la escala de la energía
%observamos que la variación afecta al duodécimo decimal y por tanto no es
%significativa, y más teniendo en cuenta que este error es a causa de los
%cálculos numericos realizados por Matlab.




% Alguna otra cosilla

%  vamos a no repetir, media órbita basta porque el coseno es simétrico
% En las elípticas buscamos el cruce de 90º, como hicimos con e>=1
if (excen0<1. && abs(excen0-1.0) > 1.e-4 )
   for i=2:length(t)
        if (r(i,1)<0)
             kfit=i;
             break
        end
   end
else
    kfit = icross ;
end
%%Para las parabólicas e hiperbólicas no hacemos nada, ya era 90º

% % preparamos vectores para 1/r, coseno, y auxiliares para el ajuste
invr  = zeros(kfit,1);
costh = zeros(kfit, 1);
numer = invr;
denom = invr;
% calculamos X e Y del ajuste
for i=1:kfit
    invr(i)   = 1./rrnorm(i);
    costh(i)  = r(i,1) / rrnorm(i);
end
% Las medias que intervienen en la fórmula
cthav = mean( costh );
invav = mean( invr  );
% vectores para el numerador y el denominador del ajuste:
% (x_i-x_avg)*(y_i-y_av)
% (x_i-x_avg)^2
num  = zeros(kfit,1);
denom  = zeros(kfit,1);
for i=1:kfit
    num(i)=(costh(i)-cthav)*(invr(i)-invav);
    denom(i) = (costh(i)-cthav)^2;
end
% fórmula del ajuste
mm = sum(num)/sum(denom);
nn = invav - mm*cthav;
% comparamos con 1/p y e/p
fprintf('m(e/p)=%16.14f, e/p=%16.14f;\tn(1/p)=%16.14f, 1/p0=%16.14f\n', mm, excen0/p0, nn, 1/p0);
% (Comparación del ajuste por minimos cuadrados)
% m(e/p)=0.40404040415298, e0/p0=0.40404040404040;	n(1/p)=0.20202020190762, 1/p0=0.20202020202020
figure
% pintamos primero la recta del ajuste m x + n 
xcos=linspace(0,1);
plot(xcos, mm*xcos + nn, 'g');
hold on;
% y luego lo calculado, de 10 en 10, hasta 90º
plot(costh(1:10:end),invr(1:10:end), '.' );
hold off;
grid on;
xlabel('cosΘ (RAD)');
ylabel('1/r (1/UL)');
legend('Ajuste', 'Cálculos');
title('Gráfico de dispersión y ajuste lineal');

%%
%7
H7 = 0;
H7 = 2*atanh(sqrt((excen0-1)/(1+excen0))*tan(acos(-1.0)/4));

M7=(excen0*sinh(H7))-H7;
t7 =0;
t7=sqrt( a0*a0*a0 / mu )*M7;

%%
%8
t8=t7/2;

M8=t8/sqrt( a0*a0*a0 / mu );

H8 = zeros(6,1);
H8(1)= M8/(excen0-1);
for i=1:5
   H8(i+1) = H8(i)+(((M8-(excen0*sinh(H8(i)))+H8(i))/((excen0*cosh(H8(i)))+1)));
end

teta_final=2*atan(tanh(H8(6)/2)*sqrt((excen0+1)/(excen0-1)));
costeta=cos(teta_final);


%T8 corresponde al instante calculado
paso = 0.01;
T8 = 0;
 for i=1:length(t)
        if abs(t(i)-t8)<paso 
             T8=i;
             break
        end
 end

% para el valor calculado de theta la posición es r8 (segun la ec.euler)
r8 = p0/(1+excen0*costeta);

erre = sqrt(r(T8,1)^2+r(T8,2)^2); %posicion calculada en la simulacion


error = abs(r8-erre); % comparando ambas posiciones obtenemos el error cometido

%Buscamos en la matriz de cosenos el valor del coseno de theta

C8 = 0;
 for i=1:length(costh)
        if abs(costeta-costh(i))<paso
             C8=i;
             break
        end
 end

%TABLA 4
tabla4 = 0;
 tabla4 = [t(C8-1)     ,t(C8)    ,t(C8+1)%tiempo
          ; costh(C8-1),costh(C8),costh(C8+1)];%cosenos
 
errort =  t8-tabla4(1,2); %error en el tiempo



%velocidad del CM en inerciales
figure
plot (t, vCM(:,2), 'r','LineWidth',1);
grid on;
xlabel('Tiempo [UT]');
ylabel('Módulo de la Velocidad del CM [UL/UT]');
title('Velocidad del CM en ejes inerciales');

%%
 
% % mi intento de newton-rhapson
% function [x,it] =newtonmethod(fun, der, x0, tol, maxiter)
% it=1;
% fxo=fun(x0);
% dxo=der(x0);
% if dxo==0
%     dxo=eps;
% end 
% x=x0-(fxo/dxo);
% fx=fun(x);
% while abs(fx)>tol && it<=maxiter
%     x0=x;
%     fxo=fx;
%     dxo=der(x0);
%     if dxo==0
%         dxo=eps;
%     end 
%     x=x0-(fxo/dxo);
%     fx=fun(x);
%     if it==maxiter
%         disp 'Maximum Iterations allowed, result might not be accurate'
%     end 
% end