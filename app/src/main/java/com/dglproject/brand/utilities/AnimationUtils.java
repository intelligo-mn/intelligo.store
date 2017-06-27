package com.dglproject.brand.utilities;

import android.animation.Animator;
import android.animation.AnimatorListenerAdapter;
import android.annotation.TargetApi;
import android.support.v4.view.ViewCompat;
import android.support.v4.view.ViewPropertyAnimatorListener;
import android.view.View;
import android.view.ViewAnimationUtils;
/**
 * Author: Tortuvshin Byambaa.
 * Project: DglBrand
 * URL: https://www.github.com/tortuvshin
 */

@Deprecated
public class AnimationUtils {

    public static final int ANIMATION_DURATION_SHORTEST = 150;
    public static final int ANIMATION_DURATION_SHORT = 250;
    public static final int ANIMATION_DURATION_MEDIUM = 400;
    public static final int ANIMATION_DURATION_LONG = 800;

    @TargetApi(21)
    public static void circleRevealView(View view, int duration) {

        int cx = view.getWidth();
        int cy = view.getHeight() / 2;


        float finalRadius = (float) Math.hypot(cx, cy);


        Animator anim =
                ViewAnimationUtils.createCircularReveal(view, cx, cy, 0, finalRadius);

        if (duration > 0) {
            anim.setDuration(duration);
        }
        else {
            anim.setDuration(ANIMATION_DURATION_SHORT);
        }

        view.setVisibility(View.VISIBLE);
        anim.start();
    }

    @TargetApi(21)
    public static void circleRevealView(View view) {
        circleRevealView(view,ANIMATION_DURATION_SHORT);
    }

    @TargetApi(21)
    public static void circleHideView(final View view, AnimatorListenerAdapter listenerAdapter) {
        circleHideView(view,ANIMATION_DURATION_SHORT,listenerAdapter);
    }

    @TargetApi(21)
    public static void circleHideView(final View view, int duration, AnimatorListenerAdapter listenerAdapter) {

        int cx = view.getWidth();
        int cy = view.getHeight() / 2;


        float initialRadius = (float) Math.hypot(cx, cy);


        Animator anim =
                ViewAnimationUtils.createCircularReveal(view, cx, cy, initialRadius, 0);

        anim.addListener(listenerAdapter);

        if (duration > 0) {
            anim.setDuration(duration);
        }
        else {
            anim.setDuration(ANIMATION_DURATION_SHORT);
        }

//        anim.setStartDelay(200);

        anim.start();
    }

    public static void fadeInView(View view) {
        fadeInView(view, ANIMATION_DURATION_SHORTEST);
    }

    public static void fadeInView(View view, int duration) {
        view.setVisibility(View.VISIBLE);
        view.setAlpha(0f);

        ViewCompat.animate(view).alpha(1f).setDuration(duration).setListener(null);
    }


    public static void fadeOutView(View view) {
        fadeOutView(view, ANIMATION_DURATION_SHORTEST);
    }

    public static void fadeOutView(final View view, int duration) {
        ViewCompat.animate(view).alpha(0f).setDuration(duration).setListener(new ViewPropertyAnimatorListener() {
            @Override
            public void onAnimationStart(View view) {
                view.setDrawingCacheEnabled(true);
            }

            @Override
            public void onAnimationEnd(View view) {
                view.setVisibility(View.GONE);
                view.setAlpha(1f);
                view.setDrawingCacheEnabled(false);
            }

            @Override
            public void onAnimationCancel(View view) { }
        });
    }

    public static void crossFadeViews(View showView, View hideView) {
        crossFadeViews(showView, hideView, ANIMATION_DURATION_SHORT);
    }

    public static void crossFadeViews(View showView, final View hideView, int duration) {
        fadeInView(showView, duration);
        fadeOutView(hideView, duration);
    }
}
